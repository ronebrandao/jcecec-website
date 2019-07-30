import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession
} from "amazon-cognito-identity-js";
import AttributeList from "./models/attributes";
import store from "@/store";

export default class Cognito {
  private poolData = {
    UserPoolId: process.env.VUE_APP_USER_POOL_ID,
    ClientId: process.env.VUE_APP_CLIENT_ID
  };

  private userPool: CognitoUserPool;
  private cognitoUser: CognitoUser;

  constructor() {
    this.userPool = new CognitoUserPool(this.poolData);
  }

  public signUp(
    username: string,
    password: string,
    attributeList: AttributeList
  ): Promise<CognitoUser> {
    return new Promise((resolve, reject) => {
      this.userPool.signUp(
        username,
        password,
        this.getAttributeList(attributeList),
        null,
        (err, result) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(result.user);
        }
      );
    });
  }

  public confirmUser(code: string): Promise<boolean> {
    this.cognitoUser = this.cognitoUser || this.userPool.getCurrentUser();

    return new Promise((resolve, reject) => {
      this.cognitoUser.confirmRegistration(code, true, err => {
        if (err) {
          reject(false);
        }

        resolve(true);
      });
    });
  }

  public resendCode(): Promise<boolean> {
    this.cognitoUser = store.state.user;
    console.log(this.cognitoUser);
    return new Promise((resolve, reject) => {
      this.cognitoUser.resendConfirmationCode((err: Error) => {
        if (err) {
          console.log(err);
          reject(false);
        }

        resolve(true);
      });
    });
  }

  public authenticateUser(
    username: string,
    password: string
  ): Promise<CognitoUserSession> {
    const userData = {
      Username: username,
      Pool: this.userPool
    };

    this.cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      this.cognitoUser.authenticateUser(
        this.getAuthenticationDetails(username, password),
        {
          onSuccess: result => {
            resolve(result);
            console.log(result);
          },
          onFailure: err => {
            reject(err);
            console.log(err);
          }
        }
      );
    });
  }

  private getAuthenticationDetails(
    username: string,
    password: string
  ): AuthenticationDetails {
    const authData = {
      Username: username,
      Password: password
    };

    return new AuthenticationDetails(authData);
  }

  private getAttributeList(
    attributeList: AttributeList
  ): CognitoUserAttribute[] {
    return Object.keys(attributeList).map(key => {
      const value = attributeList[key as keyof AttributeList];
      return new CognitoUserAttribute({
        Name: key,
        Value: value
      });
    });
  }
}
