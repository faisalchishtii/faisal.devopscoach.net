import React, { Component } from 'react';
import Botui from 'botui-react';

//import '../../../node_modules/botui/build/botui.min.css';
//import '../../../node_modules/botui/build/botui-theme-default.css';
import '../../../node_modules/botui/build/botui.js'


class Bot extends Component {
    componentDidMount() {
        this.botui.message.bot({
            content: "Hello",
            delay: 600
        }).then(() => {
            this.botui.message.bot({
                content: "I'm Faisal",
                delay: 1000
            });
        }).then(() => {
            this.botui.message.bot({
                content: "a software engineer from Bengaluru",
                delay: 2000
            });
        }).then(() => {
            this.botui.message.bot({
                content: "Do you wish to know more?",
                delay: 3000
            });
        }).then(res => {
            this.botui.action.button({
                delay: 3000,
                action: [
                    {
                      text: 'YES',
                      value: 'yes'
                    },
                    {
                      text: 'NO',
                      value: 'no'
                    }
                ]
            }).then(res => {
                console.log(res.text);
                if (res.text === "YES"){
                    this.botui.message.bot({
                        content: "been working in IT for over six years",
                        delay: 1000
                    });
                    this.botui.message.bot({
                        content: "privileged to work with talented folks in banking and telecom industry",
                        delay: 2000
                    })
                    this.botui.message.bot({
                        content: "hold expertise in implementing DevOps and Site Reliability Engineering practices across enterprises",
                        delay: 3000
                    }).then(res => {
                        this.botui.action.button({
                            delay: 500,
                            action: [
                                {
                                  text: 'Know more?',
                                  value: 'more'
                                }
                            ]
                        }).then(res => {
                            if (res.value === "more") {
                                this.botui.message.bot({
                                    content: "skilled in Bash, Python, CI/CD, Infrastructure Automation, Docker, Kubernetes, AWS",
                                    delay: 500
                                }).then(res => {
                                    this.botui.message.bot({
                                        content: "see <a href='https://www.linkedin.com/in/faisal-chishti/' target='_blank'>LinkedIn</a> for details",
                                        delay: 1500
                                    })
                                }).then(res => {
                                    this.botui.message.bot({
                                        content: "or get in touch via <a href='mailto:faisalchishtii@gmail.com'>email</a>",
                                        delay: 2500
                                    })
                                });
                            }
                        });
                    })
                }else{
                    this.botui.message.bot({
                        content: "Alright. Have a good day!",
                    });
                }
            });
        })
    }
    render() {
        return (
            <Botui ref={ cmp => this.botui = cmp }/>
        );
    }
}

export default Bot;