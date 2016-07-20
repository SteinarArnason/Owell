import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as fileImporterActions from 'actions/fileImporterActions';

import styles from './FileImporterPage.css';

class FileImporterPage extends Component {

  // Það sem er ætlast til þess að þessi component hafi aðgang að.
  // Þetta er síðan bundið saman í mapStateToProps() fallinu.
  // actions þarf ekki að vera skilgreint hér því það er bundið
  // sérstaklega saman við componentið í mapDispatchToProps() fallinu.
  static propTypes = {
    actions: PropTypes.object.isRequired,
    file: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);

    // Doing binds is reccomended here to improve performance on renders.
    this.onFileSelected = this.onFileSelected.bind(this);
    this.parseFile = this.parseFile.bind(this);
  }

  state = {
    filename: 'Choose File',
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.file != nextProps.file) {
      this.setState({ file: Object.assign({}, nextProps.file) });
    }
  }

  onFileSelected(event) {
    const inputFile = event.target.files[0];

    // Documentation for FileReader: https://developer.mozilla.org/en/docs/Web/API/FileReader
    let reader = new FileReader();
    reader.readAsText(inputFile);

    // Fires when the reader has finished
    reader.onload = () => {
      const filename = inputFile.name;
      const fileContent = JSON.stringify(reader.result);
      this.setState({ filename });
      this.parseFile(fileContent);
    };
  }

  parseFile(fileContent) {
    this.props.actions.parseFile(fileContent)
      .then(() => {
        // XXX File has been parsed, do something more...
      })
      .catch((error) => { // eslint-disable-line
        // console.log(error);
      });
  }

  render() {
    return (
      <div className="contentContainer">
        <h1 className="blueHeader">{ 'File Importer' }</h1>
        <label
          className="labelButton"
          htmlFor="fileInput" >
          { this.state.filename }
        </label>
        <input
          accept=".txt" // XXX Might need to be validated depending on how onFileSelected is implemented
          className="hideInput"
          id="fileInput"
          onChange={ this.onFileSelected }
          type="file" />
        <br />
      </div>
    );
  }

}

function mapStateToProps(state) {
  // console.log(state);
  // console.log(ownProps);
  return {
    file: state.file || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fileImporterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FileImporterPage);
