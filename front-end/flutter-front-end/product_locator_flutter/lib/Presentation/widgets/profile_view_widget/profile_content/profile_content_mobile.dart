import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Application/profile/profile_bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class ProfileContentMobilePortrait extends StatelessWidget {
  final Image? image;

  const ProfileContentMobilePortrait({Key? key, this.image}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // var margin_ortiantation = MediaQuery.of(context).si;
    return ProfileContentMobilePortrait_satesull();
  }
}

class ProfileContentMobilePortrait_satesull extends StatefulWidget {
  @override
  _ProfileContentMobilePortraitStatefull createState() =>
      _ProfileContentMobilePortraitStatefull();
}

class _ProfileContentMobilePortraitStatefull
    extends State<ProfileContentMobilePortrait_satesull> {
  ProfileBloc? profileBloc;
  @override
  void initState() {
    super.initState();
    profileBloc = BlocProvider.of<ProfileBloc>(context);
    profileBloc!.add(ProfilePageOpened());

    // authBloc.add(FetchArticlesEvent());
  }

  @override
  Widget build(BuildContext context) {
    var orientation = MediaQuery.of(context).orientation;
    return BlocConsumer<ProfileBloc, ProfileState>(listener: (context, state) {
      if (state is LoginErrorState) {
        // ignore: deprecated_member_use
        Scaffold.of(context)
            .showSnackBar(SnackBar(content: Text(state.message)));
      }
    }, builder: (context, state) {
      if (state is LoginErrorState) {
        return Text(state.message);
      } else if (state is ProfileLoadingState) {
        return Container(
            margin: EdgeInsets.only(top: 200),
            child: CircularProgressIndicator());
      } else if (state is ProfileFetchedState) {
        return Container(
            margin: orientation == Orientation.portrait
                ? const EdgeInsets.only(top: 20)
                : const EdgeInsets.only(top: 3),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(children: [
              Card(
                  clipBehavior: Clip.antiAlias,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14),
                  ),
                  child: Column(
                    children: [
                      FlatButton(
                        onPressed: () {},
                        // color: Colors.orange,
                        padding: EdgeInsets.all(10.0),
                        child: Column(children: [
                          Image.network(state.profilelist.image),
                          Container(
                              // color: Colors.black,
                              child: const Text(
                            "Change Photo",
                            style: TextStyle(
                              fontSize: 14,
                              color: Colors.blue,
                            ),
                          ))
                        ]),
                      ),
                      Container(
                          child: Text(
                        state.profilelist.firstname,
                        style: const TextStyle(
                          fontSize: 25,
                        ),
                      )),
                      Container(
                          padding: EdgeInsets.fromLTRB(30, 10, 30, 10),
                          child: const Center(
                              child: Text('Terminate account',
                                  style: TextStyle(
                                      decoration: TextDecoration.underline,
                                      color: Colors.red)))),
                    ],
                  )),
              // second card
              Card(
                  clipBehavior: Clip.antiAlias,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14),
                  ),
                  child: Form(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        TextFormField(
                          decoration: InputDecoration(
                            icon: const Icon(Icons.person),
                            hintText: 'Edit your name',
                            labelText: state.profilelist.firstname,
                          ),
                        ),
                        TextFormField(
                          decoration: InputDecoration(
                            icon: const Icon(Icons.email),
                            hintText: 'Edit your email ',
                            labelText: state.profilelist.email,
                          ),
                        ),
                        TextFormField(
                          decoration: InputDecoration(
                            icon: const Icon(Icons.phone),
                            hintText: 'Edit your  number',
                            labelText: '${state.profilelist.phone_number}',
                          ),
                        ),
                        TextFormField(
                          decoration: const InputDecoration(
                            icon: const Icon(Icons.password),
                            hintText: 'Enter your Password',
                            labelText: 'Edit passowrd',
                          ),
                        ),
                        Container(
                            width: 300,
                            padding:
                                const EdgeInsets.only(left: 50.0, top: 30.0),
                            child: const RaisedButton(
                              disabledColor: Colors.blue,
                              color: Colors.blue,
                              child: Text('Edit'),
                              onPressed: null,
                            )),
                      ],
                    ),
                  )),
            ]));
      } else {
        return Container(child: Text('ermias'));
      }
    });
  }
}
