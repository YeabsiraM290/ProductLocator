// import 'package:product_locator_flutter/responsive/Screen_type.dart';
import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/responsive/Screen_type.dart';
import 'package:product_locator_flutter/Presentation/responsive/orietation_layout.dart';
import 'package:product_locator_flutter/Presentation/widgets/register/register_container/register_container_mobile.dart';
import 'package:product_locator_flutter/Presentation/widgets/register/register_content/register_content.dart';
// import 'package:product_locator_flutter/responsive/orietation_layout.dart';
// import 'package:product_locator_flutter/widgets/register/register_container/register_container_mobile.dart';
// import 'package:product_locator_flutter/widgets/register/register_content/register_content.dart';
// import 'package:product_locator_flutter/widgets/product_locator_Home_cards/cards_container/card_container_tablet.dart';

class RegisterContainer extends StatelessWidget {
  const RegisterContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ScreenTypeLayout(
      mobile: OrientationLayout(
        portrait: RegisterContainerMobile(),
        // landscape: CardContainerLandscape(),
      ),
    );
  }

  static List<Widget> getRegister() {
    return [
      RegisterContent(
        color: Color.fromARGB(255, 255, 255, 255),
        image: Image.asset(
          'assets/game_controller.jpg',
          width: 200,
        ),
      ),
    ];
  }
}
