/*
    Collected Store Basic.

    Copyright (c) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import { withCollector } from 'r-socs-core';

import StoreBasicCollector from './collector';
import StoreBasic from './component';

const CollectedStoreBasic = withCollector(StoreBasicCollector)(StoreBasic);

export default CollectedStoreBasic;
