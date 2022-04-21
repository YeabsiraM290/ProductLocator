import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/Login/login_container/login_container_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/Login/login_content/login_content.dart';
// import 'package:product_locator_flutter/responsive/Screen_type.dart';
import 'package:flutter/material.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
// import 'package:product_locator_flutter/widgets/Login/login_container/login_container_mobile.dart';
// import 'package:product_locator_flutter/widgets/Login/login_content/login_content.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/card_container_tablet.dart';

class LoginContainer extends StatelessWidget {
  const LoginContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: LoginContainerMobile(),
        // landscape: CardContainerLandscape(),
      ),
    );
  }

  static List<Widget> getLogin() {
    return [
      LoginContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset(
          'assets/game_controller.jpg',
          width: 200,
        ),
      ),
    ];
  }
}
