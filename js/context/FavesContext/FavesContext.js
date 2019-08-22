import React, {Component} from 'react';
import createFave from "../../config/models";
import deleteFave from "../../config/models";
import queryFaves from "../../config/models";
// import the Realm helpers you just created here
const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  // more code will go here!
  getFavedSessionIds = async = () => {
      const savedFaves = await queryFaves (); 
      const faveIds  = savedFaves.map(fave => faves[0]);
      this.setState({faveIds})
  };

  addFaveSession = async sessionId => {
      const newFave = await createFave(sessionId);
      this.setState({faveIds: [...this.state.faveIds, newFave]})
  }

  removeFaveSession = async sessionId => {
      try {
          await deleteFave(sessionId)
        this.getFavedSessionIds();
    } catch (e) {
        throw error;
    }
  }

  componentDidMount() {
      this.getFavedSessionIds();
  }

  render() { 
    return (
      <FavesContext.Provider
      createFaveSession={this.createFaveSession}
      removeFaveSession={this.removeFaveSession}
       value={{...this.state}}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export {FavesProvider};
export default FavesContext;
