import LoaderTwo from '../components/loading/LoaderTwo';
import LoaderThree from '../components/loading/LoaderThree';
import LoaderFour from '../components/loading/LoaderFour';
import LoaderSix from '../components/loading/LoaderSix';
import LoaderSeven from '../components/loading/LoaderSeven';
import BoxContainer from '../decorator/LoaderContainer';

export default function () {
  return (
    <div>
      <h2>Loader Two</h2>
      <BoxContainer component={<LoaderTwo />} />
      <h2>Loader Three</h2>
      <BoxContainer component={<LoaderThree />} />
      <h2>Loader Four</h2>
      <BoxContainer component={<LoaderFour />} />
      <h2>Loader Five Does not work</h2>
      LoaderFive(react-bones)
      <h2>Loader Six</h2>
      <BoxContainer component={<LoaderSix />} />
      <h2>Loader Seven</h2>
      <BoxContainer component={<LoaderSeven />} />
    </div>
  )
}