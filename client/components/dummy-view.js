import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
// import Head from './head'

const Dummy = () => {
  return (
    <div />
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
