import { Collector, withCollector } from 'r-socs-core';
import React from 'react';
import { mergeDeepRight } from 'ramda';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ObjectCollector extends Collector {}

_defineProperty(ObjectCollector, "handleMap", {
  hfu: {
    hifu: {
      store: 'store'
    },
    hefu: {
      merge: 'merge',
      clear: 'clear'
    }
  }
});

class StoreBasic extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "store", () => this.state.store);

    _defineProperty(this, "clear", () => this.setState({
      store: undefined
    }));

    _defineProperty(this, "merge", (name, obj) => {
      this.setState(({
        store
      }) => {
        const newStore = { ...store
        };
        newStore[name] = mergeDeepRight(newStore[name], obj);
        return {
          store: newStore
        };
      });
    });

    this.state = {
      store: undefined
    };
  }

  render() {
    return null;
  }

}

/*
    Collected Store Basic.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
const CollectedStoreBasic = withCollector(ObjectCollector)(StoreBasic);

export { CollectedStoreBasic };
