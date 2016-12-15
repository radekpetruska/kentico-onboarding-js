import React from 'react';

class CreateItem extends React.Component {
  static propTypes = {
    onCreate: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.input = null;
    this.state = { errorMessage: null };

    this._onAddButtonClick = this._onAddButtonClick.bind(this);
  }

  _onAddButtonClick(e) {
    e.preventDefault();
    const inputValue = this.input.value;
    if (!inputValue) {
      this.setState({ errorMessage: 'Value must not be empty' });
      return;
    }

    this.props.onCreate(inputValue);
    this.input.value = null;
    this.setState({ errorMessage: null });
  }

  render() {
    var formGroupClassNames = 'form-group' + ((!this.state.errorMessage) ? '' : ' has-error');

    return (
      <form className="form-inline">
        <div className={formGroupClassNames}>
          <input type="text"
                 className="form-control"
                 ref={(input) => this.input = input} />
          <button type="submit" className="btn btn-default" onClick={this._onAddButtonClick}>Add</button>
          <span className="help-block"> {this.state.errorMessage}</span>
        </div>
      </form>
    );
  }
}

export default CreateItem;
