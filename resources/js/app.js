/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react'
import ReactRenderer from './src/ReactRenderer'
import ExampleComponent from './components/ExampleComponent'

const components = [
  {
    name: "ExampleComponent",
    component: <ExampleComponent />,
  },
]

new ReactRenderer(components).renderAll()