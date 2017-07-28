import { expect } from 'chai';

import AppContainer from '../../../src/containers/AppContainer';

describe('AppContainer', () => {
  let subject;

  beforeEach(() => {
    subject = new AppContainer();
  });

  describe('ping', () => {
    it('returns pong', () => {
      expect(subject.ping()).to.eq('pong');
    });
  });
});
