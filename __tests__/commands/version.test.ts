import { message as mockMessage } from '../mocks/discord';
import Version from './../../src/commands/version';

let sendMock: jest.Mock<any, any>;
beforeEach(() => {
  sendMock = jest.fn();
  mockMessage.channel.send = sendMock;
  mockMessage.channel.sendMessage = sendMock;
});

describe('Version Command', () => {
  describe('Execute', () => {
    test('Sends message with current running version', () => {
      Version.execute([], mockMessage);
      const message = sendMock.mock.calls[0][0];
      const found = /Hackbot test is running v(\d+\.){2}\d+/.test(message);
      expect(found).toEqual(true);
    });
  });
});
