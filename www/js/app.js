var MyPage = React.createClass({
  displayName: 'MyPage',

  getInitialState: function () {
    return {
      username: '',
      password: '',
      vegetables: ['Tomato', 'Cucumber', 'Onion', 'Eggplant', 'Cabbage'],
      selectedVegetable: 'Onion'
    };
  },

  renderToolbar() {
    return React.createElement(
      Ons.Toolbar,
      null,
      React.createElement(
        'div',
        { className: 'center' },
        'Form input'
      )
    );
  },

  handleClick: function () {
    if (this.state.username === 'bob' && this.state.password === 'secret') {
      ons.notification.alert('You are now signed in!');
    } else {
      ons.notification.alert('Username or password incorrect!');
    }
  },

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  },

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  },

  handleVegetableChange(vegetable) {
    this.setState({ selectedVegetable: vegetable });
  },

  renderCheckboxRow(row) {
    return React.createElement(
      Ons.ListItem,
      { key: row, tappable: true },
      React.createElement(
        'label',
        { className: 'left' },
        React.createElement(Ons.Input, {
          inputId: `checkbox-${ row }`,
          type: 'checkbox'
        })
      ),
      React.createElement(
        'label',
        { htmlFor: `checkbox-${ row }`, className: 'center' },
        row
      )
    );
  },

  renderRadioRow(row) {
    return React.createElement(
      Ons.ListItem,
      { key: row, tappable: true },
      React.createElement(
        'label',
        { className: 'left' },
        React.createElement(Ons.Input, {
          inputId: `radio-${ row }`,
          checked: row === this.state.selectedVegetable,
          onChange: this.handleVegetableChange.bind(this, row),
          type: 'radio'
        })
      ),
      React.createElement(
        'label',
        { htmlFor: `radio-${ row }`, className: 'center' },
        row
      )
    );
  },

  render: function () {
    return React.createElement(
      Ons.Page,
      { renderToolbar: this.renderToolbar },
      React.createElement(
        'section',
        { style: { textAlign: 'center' } },
        React.createElement(
          'p',
          null,
          React.createElement(Ons.Input, {
            value: this.state.username,
            onChange: this.handleUsernameChange,
            modifier: 'underbar',
            float: true,
            placeholder: 'Username' })
        ),
        React.createElement(
          'p',
          null,
          React.createElement(Ons.Input, {
            value: this.state.password,
            onChange: this.handlePasswordChange,
            modifier: 'underbar',
            type: 'password',
            float: true,
            placeholder: 'Password' })
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            Ons.Button,
            { onClick: this.handleClick },
            'Sign in'
          )
        )
      ),
      React.createElement(Ons.List, {
        dataSource: this.state.vegetables,
        renderHeader: () => React.createElement(
          Ons.ListHeader,
          null,
          'Radio buttons'
        ),
        renderRow: this.renderRadioRow
      }),
      React.createElement(Ons.List, {
        dataSource: this.state.vegetables,
        renderHeader: () => React.createElement(
          Ons.ListHeader,
          null,
          'Checkboxes'
        ),
        renderRow: this.renderCheckboxRow
      })
    );
  }
});

ons.ready(function () {
  ReactDOM.render(React.createElement(MyPage, null), document.getElementById('app'));
});