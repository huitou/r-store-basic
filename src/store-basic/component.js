/*
    Store Basic Component.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import { mergeDeepRight } from 'ramda';

class StoreBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: undefined,
        };
    }

    store = () => this.state.store;
    clear = () => this.setState({ store: undefined });
    merge = (name, obj) => {
        this.setState(({ store }) => {
            const newStore = { ...store };
            newStore[name] = mergeDeepRight(newStore[name], obj);
            return { store: newStore };
        });
    };

    render() {
        return null;
    }
}

export default StoreBasic;
