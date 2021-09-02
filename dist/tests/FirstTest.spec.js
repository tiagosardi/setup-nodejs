"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("@models/User");
test('it should be ok', () => {
    const user = new User_1.User();
    user.name = 'Diego';
    expect(user.name).toEqual('Diego');
});
