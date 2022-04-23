// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:product_locator_flutter/Application/vendor/vendor_bloc.dart';

class VendorContentMobilePortrait extends StatelessWidget {
  const VendorContentMobilePortrait({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // var margin_ortiantation = MediaQuery.of(context).si;
    return VendorContentMobilePortraitStateful();
  }
}

class VendorContentMobilePortraitStateful extends StatefulWidget {
  @override
  _VendorContentMobilePortraitStatefull createState() =>
      _VendorContentMobilePortraitStatefull();
}

class _VendorContentMobilePortraitStatefull
    extends State<VendorContentMobilePortraitStateful> {
  VendorBloc? vendorBloc;
  @override
  void initState() {
    super.initState();
    vendorBloc = BlocProvider.of<VendorBloc>(context);
    vendorBloc!.add(VendorPageOpened());

    // authBloc.add(FetchArticlesEvent());
  }

  @override
  Widget build(BuildContext context) {
    var orientation = MediaQuery.of(context).orientation;

    // var margin_ortiantation = MediaQuery.of(context).si;
    return BlocConsumer<VendorBloc, VendorState>(listener: (context, state) {
      if (state is VendorErrorState) {
        // ignore: deprecated_member_use
        Scaffold.of(context)
            .showSnackBar(SnackBar(content: Text(state.message)));
      }
    }, builder: (context, state) {
      if (state is VendorErrorState) {
        return Text(state.message);
      } else if (state is VendorLoadingState) {
        return Container(
            margin: EdgeInsets.only(top: 200),
            child: CircularProgressIndicator());
      } else if (state is VendorFetchedState) {
        return Container(
            child: Column(children: [
          Container(
              height: 50,
              color: Color.fromARGB(255, 224, 224, 224),
              child: Row(
                children: [
                  Container(
                      margin: EdgeInsets.only(left: 20),
                      child: Text(' Profile')),
                  Container(
                      margin: EdgeInsets.only(left: 20),
                      child: Text('Products')),
                  Container(
                      margin: EdgeInsets.only(left: 20),
                      child: Text('Advertisment')),
                  Container(
                      margin: EdgeInsets.only(left: 20),
                      child: Text('shop Profile')),
                ],
              )),
          Container(
              margin: orientation == Orientation.portrait
                  ? const EdgeInsets.only(top: 20)
                  : const EdgeInsets.only(top: 3),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(children: [
                // second card

                Card(
                    clipBehavior: Clip.antiAlias,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Column(
                      children: [
                        Row(
                          children: [
                            Container(
                              margin: EdgeInsets.only(left: 50),
                              child: Column(children: [
                                Container(child: Text('Shop Image')),
                                Container(
                                    // width: 100,
                                    height: 100,
                                    child: ClipRRect(
                                      borderRadius: BorderRadius.circular(50),
                                      // child: Image.network(state.vendorlist.more)
                                    )),
                              ]),
                            ),
                            Column(
                              children: [
                                Container(
                                  margin: EdgeInsets.only(left: 50),
                                  child: Column(children: [
                                    Container(child: Text('Shop Logo')),
                                    Container(
                                        height: 100,
                                        child: ClipRRect(
                                          borderRadius:
                                              BorderRadius.circular(50),
                                          // child: image
                                        )),
                                  ]),
                                )
                              ],
                            ),
                          ],
                        ),
                        TextFormField(
                          decoration: const InputDecoration(
                            // icon: const Icon(Icons.password),
                            hintText: 'Enter your Password',
                            labelText: 'Yabsira',
                          ),
                        ),
                        TextFormField(
                          maxLines: 8,
                          decoration: const InputDecoration.collapsed(
                              hintText:
                                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and th"),
                          // decoration: const InputDecoration(
                          //   // icon: const Icon(Icons.password),
                          //   hintText: 'Enter your description',
                          //   labelText:
                          //       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
                          // ),
                        ),
                        Container(
                            width: 170,
                            padding:
                                const EdgeInsets.only(left: 0.0, top: 10.0),
                            child: RaisedButton(
                              shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(10)),
                              disabledColor: Colors.blue,
                              color: Colors.blue,
                              child: Text('Edit'),
                              onPressed: null,
                            )),
                        Container(
                            padding: EdgeInsets.fromLTRB(0, 10, 30, 10),
                            child: const Center(
                                child: Text('Update Location ',
                                    style: TextStyle(
                                        decoration: TextDecoration.underline,
                                        color: Colors.green)))),
                      ],
                    )),
              ]))
        ]));
      } else {
        return Container(child: Text('ermias'));
      }
    });
  }
}
