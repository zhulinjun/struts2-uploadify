package net.eleword.upload;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

/**
 * TODO 此处填写 class 信息
 * 
 * @author krisjin (mailto:krisjin86@163.com)
 */
public class UploadActon extends ActionSupport {

	/*
	 * 成员变量的名称不能随意更改, private File file; 变量的名称必须和jsp中上传文件标签中的name属性的值一致. private
	 * String fileFileName; 变量的名称必须为"上传文件的名称+FileName". private String
	 * fileContentType; 变量的名称必须为"上传文件的名称+ContentType",
	 */
	private List<File> file;

	private List<String> fileFileName;

	private List<String> fileContentType;

	private List<String> newImgPath = new ArrayList<String>();

	@SuppressWarnings("deprecation")
	public String upload() throws Exception {
		for (int i = 0; i < file.size(); i++) {
			String root = ServletActionContext.getRequest().getRealPath("/upload");

			int idx = fileFileName.get(i).lastIndexOf(".");

			String extention = fileFileName.get(i).substring(idx);
			String time = String.valueOf(System.currentTimeMillis());
			// 新的文件名(日期+后缀)
			String newPath = time + extention;

			newImgPath.add(newPath);

			File destFile = new File(root, newPath);

			FileUtils.copyFile(file.get(i), destFile);
		}
		return "index";
	}

	public List<File> getFile() {
		return file;
	}

	public void setFile(List<File> file) {
		this.file = file;
	}

	public List<String> getFileFileName() {
		return fileFileName;
	}

	public void setFileFileName(List<String> fileFileName) {
		this.fileFileName = fileFileName;
	}

	public List<String> getFileContentType() {
		return fileContentType;
	}

	public void setFileContentType(List<String> fileContentType) {
		this.fileContentType = fileContentType;
	}

	public List<String> getNewImgPath() {
		return newImgPath;
	}

	public void setNewImgPath(List<String> newImgPath) {
		this.newImgPath = newImgPath;
	}
}
