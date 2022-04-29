// ignore_for_file: deprecated_member_use, prefer_const_constructors

import 'package:flutter/material.dart';

class RegisterContentMobilePortrait extends StatelessWidget {
  final Color? color;
  final Image? image;
  final Image? detail;
  final Image? playbutton;
  final Image? progressindicator;
  final Image? title;
  final Image? view;
  const RegisterContentMobilePortrait(
      {Key? key,
      this.color,
      this.image,
      this.detail,
      this.playbutton,
      this.progressindicator,
      this.title,
      this.view})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    var orientation = MediaQuery.of(context).orientation;
    // var margin_ortiantation = MediaQuery.of(context).si;
    return Container(
        margin: orientation == Orientation.portrait
            ? const EdgeInsets.only(top: 20)
            : const EdgeInsets.only(top: 3),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(children: [
          Card(
              margin: EdgeInsets.all(50),
              color: color!,
              // clipBehaviorAdvertisment: Clip.antiAlias,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(14),
              ),
              child: Column(
                // ignore: prefer_const_literals_to_create_immutables
                children: [
                  Container(
                      child: Text('Welcome ', style: TextStyle(fontSize: 25))),
                  Container(
                    padding: EdgeInsets.fromLTRB(40, 30, 40, 0),
                    child: TextField(
                      decoration: const InputDecoration(
                          border: UnderlineInputBorder(), hintText: 'Email'),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.fromLTRB(40, 30, 40, 20),
                    child: TextField(
                      decoration: InputDecoration(
                          border: UnderlineInputBorder(),
                          hintText: 'User name'),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.fromLTRB(40, 30, 40, 20),
                    child: TextField(
                      decoration: InputDecoration(
                          border: UnderlineInputBorder(),
                          hintText: 'Phone number'),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.fromLTRB(40, 30, 40, 20),
                    child: TextField(
                      decoration: InputDecoration(
                          border: UnderlineInputBorder(),
                          hintText: 'Confirm Password'),
                    ),
                  ),
                  FlatButton(
                    color: Colors.blue,
                    onPressed: () {},
                    // color: Colors.orange,
                    padding: EdgeInsets.fromLTRB(40, 10, 40, 10),
                    child: Text("Sign in"),
                  ),
                  Container(
                      margin: EdgeInsets.all(20),
                      child: Text('Alredy have an account? Login'))
                ],
              )),
          // second card
        ]));
  }
}
