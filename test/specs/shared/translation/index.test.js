import React from 'react';
import renderer from 'react-test-renderer';
import FormattedDyncMessage from '@/shared/translation/FormattedDyncMessage';
import FormattedHtmlMessage from '@/shared/translation/FormattedHtmlMessage';
import FormattedMessage from '@/shared/translation/FormattedMessage';
import FormattedNumber from '@/shared/translation/FormattedNumber';

describe('translation', () => {
  it('FormattedDyncMessage should work fine ', () => {
    const tree = renderer
      .create(<div><FormattedDyncMessage value="test" /></div>)
      .toJSON();
    expect(tree).toMatchSnapshot();

    const tree1 = renderer
      .create(<div><FormattedDyncMessage value="" /></div>)
      .toJSON();
    expect(tree1).toMatchSnapshot();

  });


  it('FormattedHtmlMessage should work fine ', () => {
    const tree = renderer
      .create(<FormattedHtmlMessage value="FormattedHtmlMessage" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('FormattedNumber should work fine ', () => {
    const tree = renderer
      .create(<FormattedNumber value={233} numberStyle="decimalinreport"  />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
