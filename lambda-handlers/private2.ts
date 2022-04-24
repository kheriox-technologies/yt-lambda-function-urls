import { Handler } from 'aws-lambda';
import * as utils from '/opt/utils';

export const handler: Handler = async (event, context) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      // Lambda handler code goes here
      utils.logInfo(event, 'Event');
      return resolve({ message: 'This is a message returned from Private2 Function' });
    } catch (error) {
      utils.logError(error);
      reject();
    }
  });
};
