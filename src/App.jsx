import './App.css';
import HofComponent from './components/HOFComponent';
import LikeImage from './components/HOFLikeImage';
import LikePost from './components/HOFLikePost';
import RenderProps from './components/RenderPropsComponent';
import RenderLikeImage from './components/RenderPropsLikeImage';
import RenderLikePost from './components/RenderPropsLikePost';

function App() {
  return (
    <>
    <div className='HOC'>
      <h1>HOC-Method</h1>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
    </div>

    <hr/>

    <div className='Render'>
      <h1>Render Props-Method</h1>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <RenderProps render={(count, incrementFunction)=>(
          <RenderLikeImage count={count} incrementFunction={incrementFunction}/>
        )}/>

        <RenderProps render={(count, incrementFunction)=>(
          <RenderLikePost count={count} incrementFunction={incrementFunction}/>
        )}/>

      </div>
    </div>
    
    </>
  );
}

export default App;
