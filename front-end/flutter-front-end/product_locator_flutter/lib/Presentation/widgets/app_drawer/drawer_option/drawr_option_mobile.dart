// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';

class DrawerOpitonMobilePortrait extends StatelessWidget {
  final String? title;

  final Image? iconData;
  const DrawerOpitonMobilePortrait({Key? key, this.title, this.iconData})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var orientation = MediaQuery.of(context).orientation;
    return Column(children: [
      Container(
          margin: EdgeInsets.fromLTRB(20, 100, 0, 0),
          child: Row(children: [
            Text(
              'product locator',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            Container(
                margin: EdgeInsets.only(left: 15),
                width: 40,
                height: 40,
                child: iconData)
          ])),
      Container(
        // width: 30,
        margin: orientation == Orientation.portrait
            ? const EdgeInsets.fromLTRB(50, 0, 0, 0)
            : const EdgeInsets.only(top: 40),
        child: Column(
          children: [
            // Container(child: iconData),

            Container(
                margin: EdgeInsets.only(top: 20),
                child: FlatButton(
                  child: Text('Profile'),
                  onPressed: () {
                    // Navigator.pop(context);
                    Navigator.pushNamed(context, '/profile');
                  },
                )),
            Container(
                margin: EdgeInsets.only(top: 20),
                child: FlatButton(
                  child: Text('Vendor'),
                  onPressed: () {
                    Navigator.pushNamed(context, '/vendor');
                  },
                )),
            Container(
                margin: EdgeInsets.only(top: 20),
                child: FlatButton(
                  child: Text('Shop'),
                  onPressed: () {
                    Navigator.pushNamed(context, '/shop');
                  },
                )),
            Container(
                margin: EdgeInsets.only(top: 20),
                child: FlatButton(
                  child: Text('WishList'),
                  onPressed: () {
                    Navigator.pushNamed(context, '/wish_list');
                  },
                )),
            Container(
                margin: EdgeInsets.only(top: 20),
                child: FlatButton(
                  child: Text('Login'),
                  onPressed: () {
                    Navigator.pushNamed(context, '/Login');
                  },
                )),
            Container(
                margin: EdgeInsets.only(top: 20),
                child: FlatButton(
                  child: Text('Register'),
                  onPressed: () {
                    Navigator.pushNamed(context, '/SignUp');
                  },
                )),
          ],
        ),
      )
    ]);
  }
}

// class MyApp extends StatefulWidget {
//   @override
//   _MyAppState createState() => _MyAppState();
// }

// class _MyAppState extends State<MyApp> {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text("FAB Button Example"),
//           backgroundColor: Colors.blue,
//           actions: <Widget>[
//             IconButton(icon: Icon(Icons.camera_alt), onPressed: () => {}),
//             IconButton(icon: Icon(Icons.account_circle), onPressed: () => {})
//           ],
//         ),
//         floatingActionButton: FloatingActionButton(
//           child: Icon(Icons.navigation),
//           backgroundColor: Colors.green,
//           foregroundColor: Colors.white,
//           onPressed: () => {},
//         ),
//         /*floatingActionButton:FloatingActionButton.extended(  
//         onPressed: () {},  
//         icon: Icon(Icons.save),  
//         label: Text("Save"),  
//       ), */
//       ),
//     );
//   }
// }
