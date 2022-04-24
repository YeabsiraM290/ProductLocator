// ignore_for_file: deprecated_member_use, prefer_const_constructors

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:product_locator_flutter/Application/customer_login/customer_login_bloc.dart';
import 'package:product_locator_flutter/Presentation/utils/storage.dart';

class LoginContentMobilePortrait extends StatelessWidget {
  final Image? image;

  const LoginContentMobilePortrait({
    Key? key,
    this.image,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return LoginContentMobilePortraitStatefull();
  }
}

class LoginContentMobilePortraitStatefull extends StatefulWidget {
  @override
  _LoginContentMobilePortraitStatefull createState() =>
      _LoginContentMobilePortraitStatefull();
}

class _LoginContentMobilePortraitStatefull
    extends State<LoginContentMobilePortraitStatefull> {
  TextEditingController _emailTEC = TextEditingController();
  TextEditingController _passwordTEC = TextEditingController();
  AuthBloc? authBloc;
  String? UserInfo;

  @override
  void initState() {
    super.initState();
    authBloc = BlocProvider.of<AuthBloc>(context);

    Future init() async {
      final UserInfo = await UserSecureStorage.getUserInfo() ?? [];

      // print(UserInfo);
    }
    // authBloc.add(FetchArticlesEvent());
  }

  // final msg = BlocBuilder<AuthBloc, AuthState>(
  //   builder: (context, state) {
  //     if (state is LoginErrorState) {
  //       return Text(state.message);
  //     } else if (state is LoginLoadingState) {
  //       return Center(child: CircularProgressIndicator());
  //     } else {
  //       return Container(child: Text('enenja man mn endetefetere alakm'));
  //     }
  //   },
  // );
  @override
  Widget build(BuildContext context) {
    var orientation = MediaQuery.of(context).orientation;

    return BlocConsumer<AuthBloc, AuthState>(listener: (context, state) {
      if (state is UserLoginSuccessState) {
        Navigator.pushNamed(context, '/shop');
      }
    }, builder: (context, state) {
      if (state is LoginErrorState) {
        return Text(state.message);
      } else if (state is LoginLoadingState) {
        return Center(child: CircularProgressIndicator());
      } else {
        return
            // Container(child: Text('enenja man mn endetefetere alakm'));

            Container(
                margin: orientation == Orientation.portrait
                    ? const EdgeInsets.only(top: 20)
                    : const EdgeInsets.only(top: 3),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Column(children: [
                  Card(
                      margin: EdgeInsets.all(50),
                      // color: color!,
                      // clipBehaviorAdvertisment: Clip.antiAlias,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: Column(
                        // ignore: prefer_const_literals_to_create_immutables
                        children: [
                          Container(
                              child: Text('Login ',
                                  style: TextStyle(fontSize: 25))),
                          Container(
                            padding: EdgeInsets.fromLTRB(40, 30, 40, 0),
                            child: TextField(
                              controller: _emailTEC,
                              decoration: const InputDecoration(
                                  border: UnderlineInputBorder(),
                                  hintText: 'Email'),
                            ),
                          ),
                          Container(
                            padding: EdgeInsets.fromLTRB(40, 30, 40, 20),
                            child: TextField(
                              obscureText: true,
                              controller: _passwordTEC,
                              decoration: InputDecoration(
                                  border: UnderlineInputBorder(),
                                  hintText: 'Password'),
                            ),
                          ),

                          Container(
                              margin: EdgeInsets.all(20),
                              child: Text('Forgot passowrd?')),
                          //   ],
                          // ),
                          FlatButton(
                            color: Colors.blue,
                            onPressed: () {
                              var _email = _emailTEC.text;
                              var _password = _passwordTEC.text;
                              authBloc!.add(LoginButtonPressd(
                                  email: _email, password: _password));
                              print('print mareg echlalwaa');

                              print(UserInfo);
                              print('email:' +
                                  _email +
                                  "\n" +
                                  'password:' +
                                  _password);
                            },
                            padding: EdgeInsets.fromLTRB(40, 10, 40, 10),
                            child: Text("Sign in"),
                          ),
                          Container(
                              margin: EdgeInsets.all(20),
                              child: Text('Not a member? Register'))
                        ],
                      )),
                  // second card
                ]));
      }
    });
  }
}
  //   );
  // }
// }
