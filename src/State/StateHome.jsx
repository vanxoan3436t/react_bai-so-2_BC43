import React, { Component } from 'react'
import Header from './Header'

export default class StateHome extends Component {

  state = {
    srcGlasses: './img/v2.png'
  }

  handleChangeGlasses = (type) => {
    this.setState({
      srcGlasses: `./img/${type}.png`
    }, () => {

    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container changeImg'>
          <div class="row">
            <div className='col-6 '>
              <img src="./img/model.jpg" alt="left" />
              <div className='text container'>
                <h2>FENDI F8750</h2>
                <p>Lorem, ipsum dolor sit amet consectetur
                  Lorem, ipsum dolor.</p>
              </div>
              <img className='state' src='./img/v7.png' alt="v" />
            </div>
            <div className='col-6 '>
              <img src="./img/model.jpg" alt="left" />

              <img className='state' src={this.state.srcGlasses} alt="v" />

            </div>
          </div>

        </div>

        <div className='container glasses'>
          <div className='row'>
            <div className="col-2">
              <img src="./img/v1.png" alt="v1" onClick={() => {
                this.handleChangeGlasses('v1')
              }} />
            </div>
            <div className="col-2">
              <img src="./img/v2.png" alt="v2" onClick={() => {
                this.handleChangeGlasses('v2')
              }} />
            </div>
            <div className="col-2">
              <img src="./img/v3.png" alt="v3" onClick={() => {
                this.handleChangeGlasses('v3')
              }} />
            </div>
            <div className="col-2">
              <img src="./img/v4.png" alt="v4"  onClick={() => {
                this.handleChangeGlasses('v4')
              }}/>
            </div>
            <div className="col-2">
              <img src="./img/v5.png" alt="v5"  onClick={() => {
                this.handleChangeGlasses('v5')
              }}/>
            </div>
            <div className="col-2">
              <img src="./img/v6.png" alt="v6"  onClick={() => {
                this.handleChangeGlasses('v6')
              }}/>
            </div>
            <div className="col-2">
              <img src="./img/v7.png" alt="v7"  onClick={() => {
                this.handleChangeGlasses('v7')
              }}/>
            </div>
            <div className="col-2">
              <img src="./img/v8.png" alt="v8"  onClick={() => {
                this.handleChangeGlasses('v8')
              }}/>
            </div>
            <div className="col-2">
              <img src="./img/v9.png" alt="v9"  onClick={() => {
                this.handleChangeGlasses('v9')
              }}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

