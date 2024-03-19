import PropTypes from 'prop-types';

// const newMessage = {
//   message: 'Hello World',
//   title: 'Nicolas'
// };

const getResult = (a, b) => {
  return a + b
}

function App ({title, subtitle}) {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subtitle}</h2>
      <h2>{subtitle}</h2>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      {/* <h2>{getResult(1,2)}</h2> */}
      <p>Soy un subtitulo</p>
    </>
  )
}

export default App

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

App.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'NO hay subtitulo',
  name: 'Nicolas'
}