import React, { Component } from 'react'
import Fire from "../../../services/fire"
import FileUploader from 'react-firebase-file-uploader'
import "./imageUploader.css"
import CircularProgress from 'material-ui/CircularProgress'

class ProfilePage extends Component {
  state = {
    images: [],
    isUploading: false,
    progress: 0,
  };

  handleChangeUsername = (event) => this.setState({username: event.target.value})
  handleUploadStart = () => this.setState({isUploading: true, progress: 0})
  handleProgress = (progress) => this.setState({progress})
  handleUploadError = (error) => {
    this.setState({isUploading: false})
    console.error(error)
  }
  handleUploadSuccess = (filename) => {
    this.setState({progress: 100, isUploading: false})
    Fire.storage().ref('vehiclephotos')
        .child(filename).getDownloadURL().then(url =>this.props.addImage(url))
  }

  render() {
    return (
      <div className="imageUploaderContainer">
        {this.props.images.map(image =>  <img className="imageUploadPreview" key={image} src={image} />)}
        {this.state.images.length < 5 ?
        <label className="btnUpload"  
            style={{
                backgroundColor : this.state.isUploading? "#ffffff" : "rgb(0, 188, 212)", 
                border : this.state.isUploading? "1px solid rgb(0, 188, 212)":"none"}}>
        {this.state.isUploading ? 
             <CircularProgress
                mode="determinate"
                value={this.state.progress}
                size={60}
                thickness={7}
            />:<div>Upload Image</div>}
          
          <FileUploader
            accept="image/*"
            hidden
            disabled = {this.state.isUploading?true:false}
            name="avatar"
            randomizeFilename
            storageRef={Fire.storage().ref('vehiclephotos')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </label> : <div/>}
      </div>
    );
  }
}

export default ProfilePage;