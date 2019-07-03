import React from 'react';
import Hero from "../components/Hero";
import IconSection from "../components/IconSection";
import SamplesSection from "../components/SamplesSection";
import IconBox from "../components/IconBox";
import iconSet from '../base/iconSet';
import Modal from '../components/Modal'
import Layout from '../components/Layout'

class Index extends React.Component {
  state = {
    currentIcon: {},
    iconBoxActive: false,
    mode: 'light',
    modalOpen: false,
    modalImage: "",
    modalName: ""
  };

  setCurrentIcon = icon => {
    this.setState({
      currentIcon: icon,
      iconBoxActive: true
    })
  }

  setMode = mode => {
    this.setState({
      mode: mode
    })
  }

  closeIconBox = () => {
    this.setState({
      iconBoxActive: false
    })
  }

  openModal = (url, name) => {
    this.setState({ 
      modalOpen: true,
      modalImage: url,
      modalName: name
    });

  }


  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <Layout>
        <div className="main-page">
          {this.state.modalOpen &&  <Modal closeModal={this.closeModal} image={this.state.modalImage} imageName={this.state.modalName} />}
          <Hero />
          <IconSection setMode={this.setMode} mode={this.state.mode} icons={iconSet} setCurrentIcon={this.setCurrentIcon}/>
          <SamplesSection  openModal={this.openModal} closeModal={this.closeModal}/>
          <IconBox mode={this.state.mode} iconBoxActive={this.state.iconBoxActive} iconSet={iconSet} currentIcon={this.state.currentIcon} closeIconBox={this.closeIconBox}/>
        </div>
      </Layout>
    )
  }
};

export default Index;