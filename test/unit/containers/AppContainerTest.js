import chai, { expect } from 'chai';
import chaiDom from 'chai-dom';

import AppContainer from '../../../src/containers/AppContainer';

chai.use(chaiDom);

describe('AppContainer', () => {
  let subject;

  beforeEach(() => {
    subject = new AppContainer();
  });

  describe('renderContent', () => {
    it('returns App component in element', () => {
      expect(subject.renderContent()).to.have.text('Movie DB UISearch');
    });
  });
});
