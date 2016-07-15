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
        file: PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            filename: 'Choose File',
            file: {}
        };

        // Doing binds is reccomended here to improve performance on renders.
        this.onFileSelected = this.onFileSelected.bind(this);
        this.parseFile = this.parseFile.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.file != nextProps.file) {
            this.setState({file: Object.assign({}, nextProps.file)});
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
            this.setState({filename: filename});
            //this.setState({file: file});
            this.parseFile(fileContent);
        };
    }

    parseFile(fileContent) {
        this.props.actions.parseFile(fileContent)
            .then((parsedFile) => {
                // console.log(this.state);
            })
            .catch((error) => {
                // console.log(error);
            });
    }

    render() {
        let fileSelected = this.state.filename !== 'Choose File';

        return (
            <div className="contentContainer">
                <h1 className="blueHeader">File Importer</h1>
                <label
                    htmlFor="fileInput"
                    className="labelButton" >{this.state.filename}</label>
                <input
                    type="file"
                    id="fileInput"
                    accept=".txt" // TODO Might need to be validated depending on how onFileSelected is implemented
                    className="hideInput"
                    onChange={this.onFileSelected} />

                <br />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
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