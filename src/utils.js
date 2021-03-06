/* @flow */

import { TypeStorage } from 'graphql-compose';

const typeStorage = new TypeStorage();

export function getTypeName(name: string, opts: any): string {
  return `${(opts && opts.prefix) || 'Elastic'}${name}${(opts && opts.postfix) || ''}`;
}

export function getOrSetType<+T>(typeName: string, typeOrThunk: (() => T) | T): T {
  const type: any = typeStorage.getOrSet(typeName, (typeOrThunk: any));
  return type;
}

// Remove newline multiline in descriptions
export function desc(str: string): string {
  return str.replace(/\n\s+/gi, ' ').replace(/^\s+/, '');
}
