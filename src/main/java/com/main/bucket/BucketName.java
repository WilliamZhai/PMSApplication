package com.main.bucket;


public enum BucketName {

    MAIN_BUCKET("pms-app-file-storage-1");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
