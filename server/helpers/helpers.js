import bcrypt from 'bcrypt';

class Helpers {
  static hashThePassword(password) {
    const salt = bcrypt.genSaltSync(12);
    return bcrypt.hashSync(password, salt);
  }

  static checkThepassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }
}

export default Helpers;
