import './App.css';
import photo from './faisal.png';
import linkedin from './linkedin.png';
import github from './github.png';
import email from './email.png';
import Bot from './components/chatbot/bot'

function App() {
  return (
    <body className="App">
        
        {/*<header className="App-header">
          <a href="#"> <p id="menuText" className="navbar-text navbar-right">HOME</p></a>       
          <a href="#"><p id="menuText" className="navbar-text navbar-right">EXPERIENCE</p></a>
          <a href="#"><p id="menuText" className="navbar-text navbar-right">CONTACT ME</p></a>
        </header>*/}

        <div className="Container-intro">  

          <div className="Container-text-1">
            <code>
              <h3>Faisal Chishti</h3>
              <p>DevOps</p>
              <p><a href="https://bt.com" target="_blank">BT Group</a>
              </p>
            </code>
          </div>

          <div className="Container-image">
            <img src={photo} className="App-photo" alt="logo" />
            <table>
              <tr>
                <td><a href='https://www.linkedin.com/in/faisal-chishti/' target='_blank'><img src={linkedin} className="App-icons" alt="linkedin-hyperlink"/></a></td>
                <td><a href='mailto:faisalchishtii@gmail.com'><img src={email} className="App-icons" alt="email-hyperlink"/></a></td>
                <td><a href='https://github.com/faisalchishtii' target='_blank'><img src={github} className="App-icons" alt="github-hyperlink"/></a></td>
              </tr>
            </table>
          </div>

          <div className="Container-text-2">
              <code>
                <p>
                  Previously at:{<br/>} 
                  <a href="https://aptean.com" target="_blank">Aptean</a>,{<br/>} 
                  <a href="https://wellsfargo.com" target="_blank">Wells Fargo</a> and{<br/>}
                  <a href="https://fidelity.com" target="_blank">Fidelity Investments</a>
                </p>
              </code>
          </div>

        </div>

        <div className="App-secondary">
          <Bot/>
        </div>

    </body>
  );
}

export default App;
