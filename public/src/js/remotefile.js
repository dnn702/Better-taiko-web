class RemoteFile {
	constructor(url) {
		this.url = url;
	}

	async arrayBuffer() {
		const res = await fetch(this.url);
		if (!res.ok) throw new Error(this.url);
		return await res.arrayBuffer();
	}

	async text() {
		const res = await fetch(this.url);
		if (!res.ok) throw new Error(this.url);
		return await res.text();
	}
}
