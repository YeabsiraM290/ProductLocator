import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:product_locator_flutter/Application/customer_login/customer_login_bloc.dart';
import 'package:product_locator_flutter/Data/Repository/customer_login_repo.dart';
import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/views/home_view/home_view_mobile.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
// import 'package:product_locator_flutter/views/home_view_tablet.dart';
import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/views/login/login_view_mobile.dart';
import 'package:product_locator_flutter/Presentation/views/profile_views/profile_view_mobile.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
// import 'package:product_locator_flutter/views/home_view_mobile.dart';

class ProfileView extends StatelessWidget {
  const ProfileView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        //  MultiBlocProvider(
        //   providers: [
        //     BlocProvider(
        //         create: (context) =>
        //             AuthBloc(LoginInitState(), CustomerLoginRepo()))
        //   ],
        //   child: Scaffold(
        //       body: BlocListener<AuthBloc, AuthState>(
        //     listener: (context, state) {
        //       if (state is UserLoginSuccessState) {
        //         Navigator.pushNamed(context, '/');
        //       } else if (state is AdmnLoginSuccessState) {
        //         Navigator.pushNamed(context, '/ermias');
        //       }
        //     },
        // child:
        body: ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: ProfileMobilePortrait(),
        landscape: const ProfileMobileLandscape(),
      ),
      // tablet: const OrientationLayout(
      //     portrait: HometViewTablet(),
      //     landscape: HometViewTabletLandscape())
    ));
    //   )),
    // );
  }
}
