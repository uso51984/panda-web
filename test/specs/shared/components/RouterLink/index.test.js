
import React from 'react';
import renderer from 'react-test-renderer';
import Link from '@/shared/components/RouterLink/Link';
import NavLink from '@/shared/components/RouterLink/NavLink';
import Redirect from '@/shared/components/RouterLink/Redirect';
import buildURL from '@/shared/components/RouterLink/utils/buildURL';


jest.mock('react-router-dom', () => {
  const LinkNode = ({ to, children, ...rest }) => <a href={to} {...rest}>{children}</a>;

  return ({
    Link: LinkNode,
    NavLink: LinkNode,
    Redirect: LinkNode,
  });
});


describe('RouterLink', () => {
  it('buildURL', () => {
    expect(buildURL('http://www.facebook.com')).toEqual('http://www.facebook.com?locale=zh-CN');
    expect(buildURL({
      url: '/user/:id/name/:age',
      params: {
        id: 23,
        age: 25,
      },
      search: {
        name: 'chenjianbin',
      },
    })).toEqual('/user/23/name/25?name=chenjianbin&locale=zh-CN');
  });

  it('Link renders correctly', () => {
    const tree = renderer
      .create(<Link to="http://www.facebook.com" className="test">Facebook</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('NavLink renders correctly', () => {
    const tree = renderer
      .create(<NavLink to="http://www.facebook.com" className="test">Facebook</NavLink>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Redirect renders correctly', () => {
    const tree = renderer
      .create(<Redirect to="http://www.facebook.com" className="test">Facebook</Redirect>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


