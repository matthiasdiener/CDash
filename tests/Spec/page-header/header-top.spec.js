import {mount} from "@vue/test-utils";
import HeaderTop from "../../../resources/js/components/page-header/HeaderTop.vue";
import expect from 'expect';

describe('HeaderTop', () => {
  let component;
  const uri = {
    home: '/home',
    current: '/some/other/endpoint',
    login: '/endpoint/to/login',
    logout: '/endpoint/to/logout',
    register: '/endpoint/to/register',
    profile: '/user/profile/endpoint',
  };

  beforeEach(() => {
    component = mount(HeaderTop, {
      propsData: {
        user: {},
        uri: uri,
      }
    });
  });

  it ('has an id of #headertop', () => {
    const el = component.find('#headertop');
    expect(el.is('div')).toBe(true);
  });

  it('has child of #headertop with id #topmenu', () => {
      const el = component.find('#headertop');
      expect(el.contains('#topmenu')).toBe(true);
  });

  it('has a "Login" link', () => {
    const el = component.find('#cdash-login-link');
    expect(el.attributes('href')).toBe(uri.login);
  });

  it('has a "Register" link', () => {
    const el = component.find('#cdash-register-link');
    expect(el.attributes('href')).toBe(uri.register);
  });

  it('has a "My CDash" link', () => {
    const el = component.find('#cdash-profile-link');
    expect(el.attributes('href')).toBe(uri.profile);
  });

  it('has a "Logout" link', () => {
    const el = component.find('#cdash-logout-link');
    expect(el.attributes('href')).toBe(uri.logout);
  });

  it('has an "All Dashboards" link', () => {
    const el = component.find('#cdash-home-link');
    expect(el.attributes('href')).toBe(uri.home);
  })

});
