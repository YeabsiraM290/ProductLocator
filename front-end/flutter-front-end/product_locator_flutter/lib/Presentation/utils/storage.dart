import 'dart:convert';

import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class UserSecureStorage {
  static final _storage = FlutterSecureStorage();
  static const _userinfo = 'usename';
  static Future setUserInfo(Map<String, dynamic> UserInfo) async {
    final value = json.encode(UserInfo);

    await _storage.write(key: _userinfo, value: value);
  }

  static Future<Map<String, dynamic>?> getUserInfo() async {
    final value = await _storage.read(key: _userinfo);
    return value == null ? null : Map<String, dynamic>.from(json.decode(value));

    // return value == null ? null : List<String>.from(json.decode(value));
  }
}
