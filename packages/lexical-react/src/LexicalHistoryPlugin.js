/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type {HistoryState} from './shared/useHistory';

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {useHistory} from './shared/useHistory';

export {createEmptyHistoryState} from './shared/useHistory';

export type {HistoryState};

export function HistoryPlugin({
  externalHistoryState,
}: {
  externalHistoryState?: HistoryState,
}): null {
  const [editor] = useLexicalComposerContext();
  useHistory(editor, externalHistoryState);

  return null;
}
