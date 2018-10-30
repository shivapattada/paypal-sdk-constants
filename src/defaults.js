/* @flow */

import { COUNTRY } from './locale';
import { CURRENCY, INTENT, COMMIT, VAULT } from './order';
import { COMPONENTS } from './params';

export const DEFAULT_COUNTRY = COUNTRY.US;
export const DEFAULT_CURRENCY = CURRENCY.USD;
export const DEFAULT_INTENT = INTENT.CAPTURE;
export const DEFAULT_COMMIT = COMMIT.TRUE;
export const DEFAULT_VAULT = VAULT.TRUE;
export const DEFAULT_COMPONENTS = COMPONENTS.BUTTONS;