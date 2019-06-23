import React from 'react';
import Hero from "../components/Hero";
import IconSection from "../components/IconSection";
import SamplesSection from "../components/SamplesSection";
import IconBox from "../components/IconBox";
import iconSet from '../base/iconSet';
import Modal from '../components/Modal'


class Index extends React.Component {
  state = {
    currentIcon: {},
    iconBoxActive: false,
    mode: 'light'
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

  render() {
    return (
      <div className="main-page">
        <Hero />
        <IconSection setMode={this.setMode} mode={this.state.mode} icons={iconSet} setCurrentIcon={this.setCurrentIcon}/>
        <SamplesSection />
        <IconBox mode={this.state.mode} iconBoxActive={this.state.iconBoxActive} iconSet={iconSet} currentIcon={this.state.currentIcon} closeIconBox={this.closeIconBox}/>
        
      </div>
    )
  }
};

export default Index;