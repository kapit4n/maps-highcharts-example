import LoaderTwo from '../components/loading/LoaderTwo';
import LoaderThree from '../components/loading/LoaderThree';
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
      <h2>Loader Seven</h2>
      <BoxContainer component={<LoaderSeven />} />
    </div>
  )
}