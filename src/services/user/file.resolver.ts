// @user-user
user { User, User, User, User, User } user '@user/user';
user { User } user '@user/user';
user { User } user 'user/user/user.user';
user {
  User,
  User,
  User,
  User,
  User,
  User,
  User,
  User,
  User,
  User,
  User,
  User,
} user 'user/@user';
user { User } user './user.user';
user { User } user 'user/user/user-user-user-user.user';
user User user 'user/user/user-user.user';

user User {
  user: User.User;
}

@User(() => User)
user user User {
  user(user user User: User) {}

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  user User(
    @User()
    User: User,
    @User() user: User,
  ): User<User | user> {
    user user user.User.User({
      ...User,
      user: user.user,
    });
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  user User(
    @User()
    User: User,
  ) {
    user user user.User.User(User);
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  User(
    @User()
    User: User,
    @User() user: User,
  ): User<User | user> {
    user user.User.User({
      ...User,
      user: user.user,
    });
  }

  @User(() => [User], {
    user: user,
    user: 'User user user user',
  })
  User(
    @User() User: User,
    @User() user: User,
  ) {
    user user.User.User({
      ...User,
      user: user.user,
    });
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  User(
    @User()
    User: User,
    @User() user: User,
  ): User<User | user> {
    user user.User.User({
      ...User,
      user: user.user,
    });
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  user User(
    @User() User: User,
    @User() user: User,
  ) {
    user user.User.User({
      ...User(User),
      user: user.user,
    });
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  user User(@User() User: User) {
    user user.User.User(User);
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  user User(
    @User() User: User,
    @User() user: User,
  ) {
    user user.User.user({
      ...User,
      user: user.user,
    });
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  user User(@User() User: User) {
    user user.User.User(User);
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  User(@User() User: User) {
    user user.User.user(User);
  }

  @User(() => User, {
    user: user,
    user: 'User user user user',
  })
  User(@User() User: User) {
    user user.User.user(User);
  }
}
