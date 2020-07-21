import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      /*
      window.alert('Movie not found');
      window.location.reload(true);
      */
      //this.setState({ hasError: false });
      return (
        <div className="ErrorBoundary">
          <h1>Sorry!</h1>
          <h2>No results found for your search</h2>
          <h3>Suggestions:</h3>
          <p>
          -Make sure all the words are spelled correctly.<br/>
          -Try different keywords.<br/>
          -Try more general keywords.<br/>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
