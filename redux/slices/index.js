import commonsReducer, {
  startLoading,
  stopLoading,
  setIsLogged,
  setLogIn,
} from './common';

import loginReducer, { setLogin, autoLogin } from './login';
import homeReducer, { homeParams } from './home';
import configReducer, { getPermissions } from './config';
import producsSlice, { setNewProduc, setImageProduc } from './producs';

export {
  loginReducer,
  commonsReducer,
  homeReducer,
  configReducer,
  producsSlice,
};
export {
  setLogin,
  autoLogin,
  startLoading,
  stopLoading,
  setIsLogged,
  setLogIn,
  homeParams,
  getPermissions,
  setNewProduc,
  setImageProduc,
};

const ggg = {
  _persist: { rehydrated: true, version: -1 },
  commons: { isLogged: false, isLoggedIn: false, loading: false },
  config: { params: [] },
  home: { home: [] },
  login: {
    login: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsImtpZCI6IjdTWVpjUnNrWlpPMzNaVzIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxMzc1MTk3LCJpYXQiOjE2OTEzNzE1OTcsImlzcyI6Imh0dHBzOi8venN3aWFlaGFnY3J2dnV2bHhzbWcuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjlmZWQ1ODJmLTFkNTAtNGU5OS1hYjk4LTE1NzJhZTJlNTEyMSIsImVtYWlsIjoiYWxleGlzZnJlbmVAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTEzNzE1OTd9XSwic2Vzc2lvbl9pZCI6IjA4NDhlNjUxLTk0ZDItNDNkOS1hZWI5LTAyYjk2ZDA1NzM1ZCJ9.TMkY8xOzuEN5NmmRHzJsfJ68X-lBjPqfwvqzNdK3cr0',
      aud: 'authenticated',
      email: 'alexisfrene@gmail.com',
      id: '9fed582f-1d50-4e99-ab98-1572ae2e5121',
      phone: '',
      role: 'authenticated',
    },
    permissions: null,
    token:
      'eyJhbGciOiJIUzI1NiIsImtpZCI6IjdTWVpjUnNrWlpPMzNaVzIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxMzkwMDk1LCJpYXQiOjE2OTEzODY0OTUsImlzcyI6Imh0dHBzOi8venN3aWFlaGFnY3J2dnV2bHhzbWcuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjlmZWQ1ODJmLTFkNTAtNGU5OS1hYjk4LTE1NzJhZTJlNTEyMSIsImVtYWlsIjoiYWxleGlzZnJlbmVAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTEzODY0OTV9XSwic2Vzc2lvbl9pZCI6IjU5Yjg2M2UwLTFmYzktNGQyZS1iMWZjLWZiNjIyOTFkMDljZSJ9.PBxLS8zJEQLAscP2eh-ugOTSwmzH3CdI6HYnsk2L1q4',
    user: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsImtpZCI6IjdTWVpjUnNrWlpPMzNaVzIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxMzkwMDk1LCJpYXQiOjE2OTEzODY0OTUsImlzcyI6Imh0dHBzOi8venN3aWFlaGFnY3J2dnV2bHhzbWcuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjlmZWQ1ODJmLTFkNTAtNGU5OS1hYjk4LTE1NzJhZTJlNTEyMSIsImVtYWlsIjoiYWxleGlzZnJlbmVAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTEzODY0OTV9XSwic2Vzc2lvbl9pZCI6IjU5Yjg2M2UwLTFmYzktNGQyZS1iMWZjLWZiNjIyOTFkMDljZSJ9.PBxLS8zJEQLAscP2eh-ugOTSwmzH3CdI6HYnsk2L1q4',
      aud: 'authenticated',
      email: 'alexisfrene@gmail.com',
      id: '9fed582f-1d50-4e99-ab98-1572ae2e5121',
      phone: '',
      role: 'authenticated',
    },
  },
};
