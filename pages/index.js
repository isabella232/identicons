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
    IconBoxActive: false
  };

  setCurrentIcon = icon => {
    this.setState({
      currentIcon: icon,
      IconBoxActive: true
    })
  }

  closeIconBox = () => {
    this.setState({
      IconBoxActive: false
    })
  }

  render() {
    return (
      <div className="main-page">
        <Hero />
        <IconSection icons={iconSet} setCurrentIcon={this.setCurrentIcon}/>
        <SamplesSection />
        <IconBox  IconBoxActive={this.state.IconBoxActive} iconSet={iconSet} currentIcon={this.state.currentIcon} closeIconBox={this.closeIconBox}/>
        
      </div>
    )
  }
};

export default Index;