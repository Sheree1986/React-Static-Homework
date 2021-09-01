import './App.css';
import Menu from './Menu';
import Box from './Box';
import Visitors from './Visitors';

function App() {
    return (
        <div className="App">
        <Menu /> 
        <Box name="Reviews" num="1,781" />
        <Box name="Average Rating" num="4.6" />
        <Box name="Sentiment Analysis" num="960" num2="122" num3="321" />   
        <Visitors /> 
        </div>
    )
}

export default App;
