import React from "react";
import { render } from "react-dom";

import fetchMailBoxData from "./modules/api";

const HelpScout = require('helpscout-mailbox-api');

//const GetList = ({ message }) => {
    class GetList extends React.Component {

        constructor(props) {
            super(props);
            // Don't call this.setState() here!
            this.state = { isDisabled: false};
              this.state = { resultData: ""};
            this.state = { btntext: "Click to fetch Data"};
            console.log(props.message)
           // this.handleClick = this.handleClick.bind(this);
          }

        componentDidUpdate(prevProps) {
            // Typical usage (don't forget to compare props):
           // if (this.props.userID !== prevProps.userID) {
           //   this.fetchData();
            //}
            console.log("Did Mount");
            console.log(prevProps)
          }

        handleSubmit = (event) => {
          event.preventDefault();
          //console.log({target: event.target})
          //this.setState();
          this.setState({
            isDisabled: true,
            btntext: " Loading ..."
          });

          fetchMailBoxData().then(data => {
            let { temp } = data;
          /* return {
              title: "Title",
              text: "Text"
            };*/
            this.setState({
              isDisabled: false,
              btntext: "... Done ..."
            });

            //style={{marginRight: spacing + 'em'}} 
           let area = document.getElementById("exampleResult");
           area.style.display='style={{display: block}} ';
           area.value=JSON.stringify(data, undefined, 4);;

          });

          //console.log({ target: event.target[0].value });
         // alert("wedfs");
         //{display: { this.state.showStore ? 'block' : 'none'}
        }
        render() {
          let btn_class = !this.state.isDisabled ? "" : "spinner-border spinner-border-sm";
            return (
              <form onSubmit={this.handleSubmit}>
                <div class="form-group green-border-focus">
  <label for="exampleFormControlTextarea5">Colorful border on :focus state</label>
  <textarea style={{display: 'block'}} class="form-control ml-res" id="exampleResult" rows="10" value=""></textarea>
</div>
                  <button class="btn btn-primary" type="submit" disabled={this.state.isDisabled}>
    <span className={btn_class}></span>
            {this.state.btntext}
  </button>
              </form>
            );
          
        }
}

export default GetList;