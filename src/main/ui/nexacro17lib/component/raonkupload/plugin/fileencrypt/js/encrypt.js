/*
 파일 암호화 커스터마이징 함수 입니다.
 이 함수 안에서 암호화 작업을 한 후 암호화된 결과를 callback으로 호출해 주시면 됩니다.

	options.fileArrayBuffer : 암호화할 파일 array buffer
	options.callback : 콜백 함수(작업이 완료 된 후 결과를 이 함수로 호출해 주시면 됩니다. 이 함수를 호출하면 업로드를 시작합니다.)
	options.chunkIdx : 청크의 index 값(int)
	options.isLast : 마지막 청크인지 값(bool)
	options.customEncryptConfig: custom encrypt에 대한 설정값 (new RAONKUpload 할 때에 넣어준 값이 들어있습니다.)
	options.updateExtraData: 업로드 결과 값에 추가 데이터를 넣고 싶을 때 사용 합니다. 예) 해시 값 저장
	options.customObject : 커스터마이징에 필요한 추가 데이터가 있다면 이 object를 사용하시면 됩니다.
						   (plugin/fileencrypt/js/config.js 에서 적용한 값이 넘어 옵니다.)

 */
magicjs.init('Noek8wxT71s+GnpOPcJ3LnYPlPcadD+48PYvxg6fI2AYrBxZF8DeOFLJjF6KkiK+b3XYF+Gp0L4gf3vReY+EGof016shRGtI8+imibGoAqZHeKOwj4DsWuUU9wvB91eWx6BnPQkRJ0nrkevBrXM/8SffDkbuu2pMWsUrFdSpkaT0G6JYizjvXrHfrII58ucvLlS86Va7j+/4fqQX54IZQ+FHr2RWwldSQ/tavqfU2tQYewO+IB7n/FdRdT7bt2WL2vhP9q9ivRgMkjgXnyAcWvr7OpFNMJ0ImkJii33VWkyML5McBeHjK347fhZp/3KF2p3EJgut9Gkwk9yZp8l5MA==');

var G_MAGICJS_SECRETKEY = magicjs.hex.decode('837770490dc5c7edbd3277c0508fce78');
var G_MAGICJS_IV = magicjs.hex.decode('85b1043e692444fe6232209bd917ccc3');
var G_MAGICJS_CIPHER = magicjs.cipher.create(true, "ARIA128-CBC", G_MAGICJS_SECRETKEY); // 암호화 시 사용

var G_MAGICJS_ORIGINAL_MD = magicjs.md.create('sha1'); // 원본 파일 해시값 추출 시 사용
var G_MAGICJS_ENCRYPTED_MD = magicjs.md.create('sha1'); // 암호화된 파일 해시값 추출 시 사용

// 아래 함수명은 변경하면 안됨
var fileEncryptCustomCommand = function (options) {
    var fileArrayBuffer = options.fileArrayBuffer;
	var callback = options.callback;
	var chunkIdx = options.chunkIdx;
	var isLast = options.isLast;
	var customEncryptConfig = options.customEncryptConfig;
	var updateExtraData = options.updateExtraData;
	var customObject = options.customObject;

	// 암호화
	var resultByte = null;
	var cipherText = null;
	if (customEncryptConfig.decryptInServer == '0') {
		// 서버에서 암호화 된 채로 저장하는 경우
		if (chunkIdx == 0) {
			G_MAGICJS_CIPHER.init(G_MAGICJS_IV);
		}

		cipherText = G_MAGICJS_CIPHER.update(fileArrayBuffer);

		if (isLast) { // 마지막 청크 일 때에 finish 처리해줌
			cipherText = G_MAGICJS_CIPHER.finish();
		}

		resultByte = cipherText.getBytes();
	} else {
		// 서버에서 복호화를 하여 저장하는 경우
		G_MAGICJS_CIPHER.init(G_MAGICJS_IV);

		cipherText = G_MAGICJS_CIPHER.update(fileArrayBuffer);

		cipherText = G_MAGICJS_CIPHER.finish();

		resultByte = cipherText.getBytes();
	}
	/////


	// 해시값 추출
	if (customEncryptConfig.useHash == '1') {
		// 원본 파일에 대한 해시값 추출
		if (chunkIdx == 0) {
			updateExtraData(null);
			G_MAGICJS_ORIGINAL_MD.init();
		}

		G_MAGICJS_ORIGINAL_MD.update(magicjs.utf8.encode(fileArrayBuffer));

		if (isLast) {
			var digest = G_MAGICJS_ORIGINAL_MD.digest();
			var originalFileHash = digest.toHex();

			var extraData = {
				originalFileHash: originalFileHash
			};
			updateExtraData(extraData); // 업로드 결과값에서 가져오기 위해 원본파일 해시 값을 저장함.
		}
		////


		// 암호화된 파일에 대한 해시값 추출
		if (customEncryptConfig.decryptInServer == '0') { // 서버에서 복호화를 하지 않는 경우에만 추출
			if (chunkIdx == 0) {
				G_MAGICJS_ENCRYPTED_MD.init();
			}

			G_MAGICJS_ENCRYPTED_MD.update(magicjs.utf8.encode(resultByte));

			if (isLast) {
				var digest = G_MAGICJS_ENCRYPTED_MD.digest();
				var encryptedFileHash = digest.toHex();

				var extraData = {
					encryptedFileHash: encryptedFileHash
				};
				updateExtraData(extraData); // 업로드 결과값에서 가져오기 위해 암호화된 파일 해시 값을 저장함.
			}
		}
		////
	}
	/////

	// 업로드 시작
	callback(magicjs.hex.encode(resultByte));
};