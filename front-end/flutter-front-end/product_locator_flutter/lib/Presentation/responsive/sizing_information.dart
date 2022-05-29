import 'package:flutter/material.dart';
import 'package:product_locator_flutter/Presentation/device_screen.dart';
// import 'package:product_locator_flutter/enums/device_screen.dart';

class SizingInformation {
  final Orientation? orientation;
  final DeviceScreenType? deviceScreenType;
  final Size? screenSize;
  final Size? localWidgetSize;

  SizingInformation({
    this.orientation,
    this.deviceScreenType,
    this.screenSize,
    this.localWidgetSize,
  });
  @override
  String toString() {
    return 'orientation:$orientation deviceScreenType:$deviceScreenType screenSize:$screenSize localWidgetSize:$localWidgetSize';
  }
}
